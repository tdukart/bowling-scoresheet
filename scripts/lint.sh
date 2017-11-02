function checkCodeStyle() {

  echo -e "\nChecking code style\n";
  # If there's no setting for CIRCLE_ARTIFACTS, then we're testing locally
  if [[ ">${CIRCLE_ARTIFACTS}<" == "><" ]]; then CIRCLE_ARTIFACTS="."; fi;
  script -qc "./node_modules/.bin/eslint ." ${CIRCLE_ARTIFACTS}/esLintReport.txt  > /dev/null;
  echo -e "\n     Generated esLint report :";
  cat ${CIRCLE_ARTIFACTS}/esLintReport.txt;
  echo -e "\n#################################################################\n";

}

checkCodeStyle;
