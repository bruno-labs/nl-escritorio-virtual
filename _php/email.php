<?php
    if( isset($_POST["email"]) && !empty($_POST["email"]) ){
        $nome = addslashes($_POST["nome"]);
        $email = addslashes($_POST["email"]);
        $mensagem = addslashes($_POST["mensagem"]);
        
        $to = "nlvirtual.contato@gmail.com";
        $subject = "Contato - Nl Escritorio Virtual";
        $body = "Nome: ".$nome. "\n".
        "Email: ".$email."\n".
        "Mensagem: ".$mensagem;

        $header = "From:nlvirtual.contato@gmail.com"."\r\n"."Reply-to".$email."\r\n"."X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header)){
            echo "tudo ok";
        }
        else{
            echo "Não roda";
        }
            
        
    }

?>