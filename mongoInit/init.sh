#!/bin/bash
mongoimport --host db --db test --collection videos --type json --file /videos.json --jsonArray