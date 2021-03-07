#!/bin/bash

API="http://localhost:4741"
URL_PATH="/account"

curl "${API}${URL_PATH}/${ID}/places"  \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "place": {
      "localName": "'"${LOCAL_NAME}"'",
      "country": "'"${COUNTRY}"'",
      "localImg": "'"${LOCAL_IMG}"'",
      "surfLevel": "'"${SURF_LEVEL}"'",
      "avgCostDay": "'"${AVG_COST_D}"'",
      "review": "'"${REVIEW}"'"
    }
  }'

echo


# LOCAL_NAME="TV" COUNTRY="BRAZIL" LOCAL_IMG="<IMG>" SURF_LEVEL="EXPERT" AVG_COST_D="100" REVIEW="HELLO WORD!" TOKEN=4b91d686f9baf065082be00451a86bb7 sh curl-scripts/places/create.sh