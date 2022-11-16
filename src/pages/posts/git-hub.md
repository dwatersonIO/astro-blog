---
layout: ../../layouts/BlogPostLayout.astro
title: How to Use Git and GitHub
slug: git-hub
author: David Waterson
date: 2021-09-21
category:
tags:
- tech
- github
description: How to push new projects after creating a repo and update existing projects.
---

### First time

```bash
git init
git add .
git commit -m “my changes”
git branch -M main
```

 

### Create new repo on GitHub

    git remote add origin https://github.com/github username/repo-name.git

Note: In this case origin is just term used by convention to represent the remote location.
If you want to check what current orgin is type: git remote -v.
git push -u origin main

### To update later:

    git add .
    git commit -m “my other changes”

If the origin is now different (uploading to different repo) then:

    ‘git remote set-url origin https://github.com/dwatersonIO/repo-you-want-name.git’
    git push

<style>


</style>