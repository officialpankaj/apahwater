<?php
class Database
{
    protected $connection = null;
 
    public function __construct()
    {
        try {
            $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
         
            if (mysqli_connect_errno()) {
                throw new Exception("Could not connect to database.");
            }
            if ($this->connection->connect_error) {
                die("Connection failed: " . $this->connection->connect_error);
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
 
    public function select($query = "")
    {
        try {
            $result = $this->connection->query($query);
            if ($result->num_rows > 0) {
                return $result;
            } else {
                return false;
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
        return false;
    }
 
    protected function update($query = "")
    {
        try {
            if ($this->connection->query($query) === true) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
