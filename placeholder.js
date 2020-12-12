function writeList(){
	var table = "<?php 
                $ajdik = $_COOKIE['ajdik'];
                $db_user = 'root';
                $db_name = 'devmuster4_db';
                $db_pass = '';
                $connect = mysqli_connect('localhost',$db_user,$db_pass);
                mysqli_select_db($connect,$db_name) or die(mysqli_error($connect));
                $query = $_COOKIE['WYCIAGAMYTABELKE']
                $result = mysqli_query($connect,$query);
                $count = mysqli_num_rows($result);
                $array = mysqli_fetch_array($result);
                if($count > 0)
                {
                    echo '<table>';
                    echo '<tr><th>Id</th><th>Przedmiot</th><th>Lastname</th></tr>';
                    echo '<td>';
                    while($row = mysqli_fetch_assoc($result)){
                        echo '<tr><td>'. $row['id'].'</td><td>'.$row['tytul'].'</td><td>'.$row['przedmiot'].'</td></tr>';
                    }
                }
                ?>
				"
	document.getElementById("noteList").innerHTML= table;
}