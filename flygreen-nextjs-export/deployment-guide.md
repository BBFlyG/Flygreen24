# Vercel Deployment Guide for FlyGreen Next.js Project

This guide will walk you through deploying your FlyGreen Next.js project to Vercel. These instructions are designed for beginners with limited technical experience.

## Prerequisites

1. A GitHub account (free) - [Sign up here](https://github.com/signup) if you don't have one
2. A Vercel account (free) - [Sign up here](https://vercel.com/signup) using your GitHub account

## Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "flygreen-website")
4. Keep it as a Public repository
5. Click "Create repository"

### Step 2: Upload Your Project Files

1. On your new repository page, click "uploading an existing file" link
2. Drag and drop the `flygreen-nextjs-export.zip` file you downloaded from this chat
3. Click "Commit changes"
4. Wait for the upload to complete

### Step 3: Extract the Files in GitHub

Since GitHub doesn't automatically extract zip files, you'll need to:

1. Install [GitHub Desktop](https://desktop.github.com/) on your computer
2. Clone your repository to your computer using GitHub Desktop
3. Extract the zip file you downloaded and copy all its contents to the repository folder on your computer
4. In GitHub Desktop, you'll see all the changed files
5. Add a commit message like "Add FlyGreen website files"
6. Click "Commit to main"
7. Click "Push origin" to upload all the files to GitHub

### Step 4: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account
2. Click "Add New..." and select "Project"
3. Find and select your "flygreen-website" repository from the list
4. Vercel will automatically detect that it's a Next.js project
5. Keep all the default settings as they are
6. Click "Deploy"

### Step 5: Wait for Deployment

1. Vercel will now build and deploy your website
2. This process typically takes 1-2 minutes
3. Once complete, you'll see a success message and a link to your live site

### Step 6: View Your Live Website

1. Click on the link provided by Vercel (it will look like `flygreen-website.vercel.app`)
2. Your FlyGreen website is now live on the internet!
3. You can share this link with others to show them your website

## Making Changes to Your Website

If you want to make changes to your website:

1. Edit the files on your computer
2. Commit and push the changes using GitHub Desktop
3. Vercel will automatically detect the changes and redeploy your site

## Adding a Custom Domain (Optional)

If you want to use your own domain name (like flygreen.com):

1. Purchase a domain from a provider like Namecheap, GoDaddy, or Google Domains
2. In your Vercel project dashboard, go to "Settings" > "Domains"
3. Add your custom domain and follow Vercel's instructions to configure it

## Getting Help

If you encounter any issues:

1. Vercel has excellent [documentation](https://vercel.com/docs) and [support](https://vercel.com/help)
2. For Next.js specific questions, refer to the [Next.js documentation](https://nextjs.org/docs)

Remember, this is just the beginning! As you develop the full functionality of your website, you can continue to use this same workflow to deploy updates.
