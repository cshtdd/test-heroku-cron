# test-heroku-cron
Testing [heroku cronjobs](https://devcenter.heroku.com/articles/scheduler)  

## Cron Setup  

1. Create the app  

    ```sh
        heroku apps:create test-heroku-cron
    ```

2. Connect the git repo through the Heroku GUI  

3. Install the scheduler add-on  

    ```sh
        heroku addons:create scheduler:standard --app test-heroku-cron
    ```

4. Open the Scheduler GUI  

    ```sh
        heroku addons:open scheduler
    ```

5. Create a new job with the following command `npm start`  

6. Check the task logs  

    ```sh
        heroku logs --app test-heroku-cron --ps scheduler
    ```

## Logs Setup  

Ship the logs to S3 using [Flydata](https://elements.heroku.com/addons/flydata)  

1. Install the `flydata` addon  

    ```sh
        heroku addons:create flydata:feather --app test-heroku-cron
    ```

2. Create the `test-heroku-cron-logs` S3 bucket  

4. Configure the permissions on the bucket  

    ![Bucket Permission Setup](https://heroku.flydata.co/assets/flydata/s3_diagram_en.png)  

5. Configure the bucket Lifecycle  

6. Open the Flydata GUI  

    ```sh
        heroku addons:open flydata:feather
    ```

7. Configure the bucket name  
