# Cloud Serverless Development With Python

## An example application for "serverless" development on AWS.
This is a demo application based on the TODO MVC for Vue.js.

There are some errors in the code; which is intentional to help with the course. 
If you're looking at this outside of the context of the course then you'll need to edit the following two files.

### todo/api/get.py and todo/api/delete.py
Change 

```python
    try:
        event['queryStringParameters']['id']
    except:
        pass
```

to

```python
    try:
        todo_id = event['queryStringParameters']['id']
    except:
        pass
```

# API Gateway CORS Headers

| Header        | Value           |
| ------------- |:-------------:|
| Access-Control-Allow-Headers      | 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token' |
| Access-Control-Allow-Methods      | 'DELETE,POST,GET,OPTIONS,PUT'      |
| Access-Control-Allow-Origin | '*'     |

---

- ## Return
  [![Main Page](https://img.shields.io/badge/Main-Page?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alfecjo/aws-dev)

