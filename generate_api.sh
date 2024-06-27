openapi-generator generate -i https://backend/docs/api -g typescript-angular -o src/app/services/backend --type-mappings=set=Array --type-mappings=DateTime=Date

rm src/app/services/backend/api/*.bak
rm src/app/services/backend/.gitignore
rm src/app/services/backend/.npmignore
rm src/app/services/backend/ng-package.json
rm src/app/services/backend/git_push.sh
rm src/app/services/backend/.openapi-generator-ignore
rm src/app/services/backend/README.md
rm -r src/app/services/backend/.openapi-generator
