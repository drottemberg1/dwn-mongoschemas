(git add . && git commit -m "up version" && npm version patch && npm publish)
(cd ../dwn-activities/server && ncu -u -f dw-mongoschemas)
(cd ../dwn-authentication/server && ncu -u -f dw-mongoschemas)
(cd ../dwn-setup/server && ncu -u -f dw-mongoschemas)
(cd ../dwn-user/server && ncu -u -f dw-mongoschemas)
(cd ../dwn-web/server && ncu -u -f dw-mongoschemas)

