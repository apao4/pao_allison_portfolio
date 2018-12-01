<?php //var_dump($_POST); commet this out so that all the inputted data doesnt show after you submit with missing info
    //the fake mail function is just temporary in place of the mail function we would normally use with an actual hosting site
    function fake_mail ($to, $subject, $message, $headers){
        echo '==== Fake Emails ===='.PHP_EOL;
        echo 'Subject: '.$subject.PHP_EOL;
        echo 'Email To: '.$to.PHP_EOL;
        echo 'Message: '.$message.PHP_EOL;
        echo '==== Emails End ===='.PHP_EOL;

        return true;
    }
    

    function send_email(){
        //email validations: checking required fiels 

        if(empty($_POST['name'])
            || empty($_POST['email'])
            || empty($_POST['message'])){
            
            echo 'You are missing some required fields';
            exit;
            }

            //Email Validation: checing fields containing proper syntax 
            if(!filter_Var($_POST['email'], FILTER_VALIDATE_EMAIL)){
                echo 'Your email is not valid';
                exit;A
            }
        //TODO: use the real data that from $_GET
        //to replace the following placeholders data

        $to = 'a_pao4@fanshaweonline.ca';
        $subject = 'This is an email from '.$_POST['name'];
        $message = 'Message Body:'.$_POST['message'];
        $headers = 'From: noreply@YOURDOMAIN.com';
        $headers .="Reply-To: test@test.ca";

        fake_mail($to, $subject, $message, $headers);
        //in your server use the following line instead
        //mail($to, $subject, $message);
    }
    

    send_email();
?>

