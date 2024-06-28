---
title: A beginner's guide to PGP
date: 2024-04-23
tags:
  - security
---
Here's my guide on how to set up and use PGP via Gnu Privacy Guard (GPG) to create keys, sign messages, add other's public keys, and verify the integrity of their messages. I couldn't find any simple instructions on how to use it, so I decided to write my own that is easier to understand.

I'll assume that you're using Debian Linux or a derivative, since this blog post is meant for beginners, and Ubuntu is typically what people start out with.

## Install GNU Privacy Guard
This command installs `gnupg2` which is the Debian package for GNU Privacy Guard.

```shell
sudo apt install gnupg2 -y
```


### Generate a new key
Now we need to create a key.

```shell
gpg --full-gen-key
```

This will give you a list of options. Here's my recommendation:

*   Press `Enter` to accept the default (`RSA`).
*   Press `Enter` to accept the default keysize of `3072`.
*   The expiration date is up to you, but I recommend a year. Type `1y` and press `Enter`.

Now, it wil ask you for a real name. I recommend using a pseudonym, but your real name will also work.

It will also ask you for an email address. I recommend leaving it blank, but a valid email works.

Feel free to leave the comment field blank, or add one if you'd like, up to you.

Type the letter `O` and it will give you a prompt to create a password.

**Type a strong password** since this will be the thing that secures your key. Don't reuse passwords from other accounts. Then press continue or `Enter`.

Congrats! You now have a PGP key!

### [](#publickey)Extracting your public key

You should now have a page that looks something like this:

```shell
public and secret key created and signed.

pub   rsa3072 2024-04-24 [SC] [expires: 2025-04-24]
      AFE3B9A0E5C1A3C6A5360CAA7635119DF78CE4BF
```


Chances are, you want to be able to share your public key with someone else. To do this, you need to generate a public key file.

Type the following, but replace `MYPUBLICKEY` with whatever string you got under the "pub" section (which is known as a key fingerprint).

```shell
gpg --armor --export MYPUBLICKEY > pubkey.asc
```


This is now saved to the file called `pubkey.asc`. To view the contents of the file, type `cat pubkey.asc`. You can share this with friends or put it on your website.

### [](#signing)Signing data

First we need some data to sign, so create a new text file (you can use `nano` command to do this), enter something, then save it.

The following command will let you sign a message and attach its signature inside of the file. This is great for text, but not great for pictures or data that relies on the formatting of the data within. Make sure to replace `FILENAME` with the actual name of your file or you'll just get junk.

```shell
gpg --clearsign FILENAME
```


To generate the signature and store it separately, you can type the following:

```shell
gpg --detach-sig FILENAME
```


### Importing another's public key
You probably want to be able to verify another person's message to know if it's a successful match for their key. This is useful because it proves the authenticity and integrity of the data, basically that the person who signed it is the person who holds the private key that you trust.

To do this, type the following, but replace `THEIRKEY.asc` with the actual filename.

```shell
gpg --import THEIRKEY.asc
```


## Verifying data
The main purpose of PGP is to be able to verify the integrity of data, so lets do that.

To verify someones data, type the following, but make sure to replace `SIGFILE` with the signature file and `FILENAME` with the name of the file to verify.

```shell
gpg --verify SIGFILE FILENAME
```


If the result ends with "Good signature from" followed by their name, you know that the data hasn't been tampered with and it is their own.
