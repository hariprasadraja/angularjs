package main

import (

  "net/http"
  "encoding/json"
)


func handle(res http.ResponseWriter, req *http.Request) {

   res.Header().Set("Access-Control-Allow-Origin", "*")
   mapD := map[string]int{
    "apple": 5,
    "lettuce": 7,
  }

  mapB, _ := json.Marshal(mapD)
   res.Write(mapB)

}


func main() {

  http.HandleFunc("/welcome",handle)
	http.ListenAndServe(":8080",nil)

}
