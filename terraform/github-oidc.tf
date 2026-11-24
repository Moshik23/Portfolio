# --- GitHub Actions deploys via OIDC (no stored AWS keys) ---
# Reuses the account's GitHub OIDC provider (created and managed in the
# Moshik23/memories Terraform). Only main of this repo can assume the role,
# and it can only sync this site's bucket and invalidate this distribution.

variable "github_repo" {
  description = "owner/name of the repo allowed to deploy"
  type        = string
  default     = "Moshik23/Portfolio"
}

variable "github_sub_prefix_immutable" {
  description = "Immutable OIDC subject prefix (GitHub repo settings: sub_claim_prefix), e.g. repo:Owner@123/Repo@456. Leave empty if the repo doesn't use immutable subjects."
  type        = string
  default     = ""
}

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_role" "github_deploy" {
  name = "portfolio-github-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = data.aws_iam_openid_connect_provider.github.arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          # main branch only, in either subject format GitHub may send
          "token.actions.githubusercontent.com:sub" = compact([
            var.github_sub_prefix_immutable != "" ? "${var.github_sub_prefix_immutable}:ref:refs/heads/main" : "",
            "repo:${var.github_repo}:ref:refs/heads/main",
          ])
        }
      }
    }]
  })
}

resource "aws_iam_role_policy" "github_deploy" {
  name = "portfolio-github-deploy-policy"
  role = aws_iam_role.github_deploy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["s3:ListBucket"]
        Resource = aws_s3_bucket.site.arn
      },
      {
        Effect   = "Allow"
        Action   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
        Resource = "${aws_s3_bucket.site.arn}/*"
      },
      {
        Effect   = "Allow"
        Action   = ["cloudfront:CreateInvalidation"]
        Resource = aws_cloudfront_distribution.site.arn
      }
    ]
  })
}

output "github_deploy_role_arn" {
  description = "Store as the AWS_DEPLOY_ROLE_ARN secret in the GitHub repo"
  value       = aws_iam_role.github_deploy.arn
}
