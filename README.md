# Phishing Websites

## Introduction
Collection of popular phishing websites. 

## Legal disclaimer
Usage of this websites for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.

## Usage
1) Clone the repository.
```
git clone https://github.com/tassoneroberto/phishing-websites.git
```
2) Choose the website.
3) Upload the entire content of the folder to a webserver (e.g. https://www.000webhost.com/).
4) The system will store credentials in the file ```credentials.txt``` (you can rename it to prevent others to steal this file).
5) Modify the field ```$maildrop``` inside the related PHP files to redirect the retrieved credentials to a selected email address. This is useful to prevent credentials loss if the host decide to ban the website.
6) That's it! 
