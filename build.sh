## set NodeJs and Yarn
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

## set deploy path
export DEPLOYPATH=/home/mehmetu/public_html/

yarn
yarn build
rm -rf $DEPLOYPATH/*
/bin/cp -R dist/. $DEPLOYPATH
/bin/cp -R dist/.htaccess $DEPLOYPATH/.htaccess