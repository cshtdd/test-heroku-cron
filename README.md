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

5. Create a new job with the following command `npm run worker`  

6. Check the task logs  

    ```sh
        heroku logs --app test-heroku-cron --ps scheduler
    ```
