#!/bin/sh

API="http://localhost:4741"
URL_PATH="/accounts"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

# TOKEN=4b91d686f9baf065082be00451a86bb7 sh curl-scripts/accounts/index.sh