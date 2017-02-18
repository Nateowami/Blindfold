# Blindfold

A Chrome Gmail extension to remind you when you forget to use BCC

> Because forgetting BCC exposes email addresses and feeds spam bots

**Warning! Use with caution! Version 0.1 contains a serious bug that makes it sometimes fail to detect the number of email addresses being sent to. Version 1.1 has this fixed, but both versions have trouble actually canceling the sending of the email. I'm looking into this.**

## Installation

- From a release
  - Go to https://github.com/Nateowami/Blindfold/releases and download Blindfold.crx. Ignore any messages telling you you can't install it from "this site."
  - Go to `chrome://extensions`
  - Drag Blindfold.crx from your downloads folder to Chrome's extensions page.
- From source
  - Run `git clone https://github.com/Nateowami/Blindfold`
  - Open Chrome to `chrome://extensions`
  - Check the "Developer mode" checkbox.
  - Click "Load unpacked extension" and open the directory where you cloned Blindfold.

## Usage

In Gmail, try to send an email with two or more addresses in the To or CC field. You should be prompted for confirmation.

Note: You should be prompted if the sum of addresses in the To and CC fields is more than 1. If you put one email in To or CC and others in BCC you will not be prompted.

## Bugs and Troubleshooting

Known bug:

Blindfold may detect three recipients when there are only two in the to field. This is because it sees a third blank email address. We need to work around this and not count strings if they're empty. There are probably other ways this bug manifests other than the exact situation mentioned.

Blindfold logs a few messages to the console that may be helpful for troubleshooting. These are logged when:
- Blindfold initializes
- The user clicks send
- It determines whether it needs to prompt the user
- It receives a response from the user to act upon

Problems? Feel free to open an issue: https://github.com/Nateowami/Blindfold/issues/new
