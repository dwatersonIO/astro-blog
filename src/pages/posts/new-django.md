---
layout: ../../layouts/BlogPostLayout.astro
title: Start New Django Project
slug: new-django
author: David Waterson
date: 2021-08-03
category:
tags:
- python
- django
- web
description: How to get up and running with a new Django site
---

### New virtual environment
    
```js
python -m venv venv
```
    WINDOWS: venv\scripts\activate.bat 
    LINUX: source .venv/bin/activate

### Install and make project and app

```Python
python -m pip install django
django-admin startproject mysite
python manage.py startapp blog  
```

### Register, run, create admin user

To register app in settings.py add:

    ‘blog.apps.BlogConfig’,

then...

    python manage.py runserver
    python manage.py createsuperuser
