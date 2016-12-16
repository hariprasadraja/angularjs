
package main

import (

  "net/http"
  "html/template"


  //"encoding/json"
)
func handle(res http.ResponseWriter, req *http.Request) {

  // res.Header().Set("Access-Control-Allow-Origin", "*")
  //  mapD := map[string]int{
  //   "apple": 5,
  //   "lettuce": 7,
  // }
  //
  // mapB, _ := json.Marshal(mapD)
  //  res.Write(mapB)

    // mux.ServeFiles("/public/*filepath", http.Dir("public"))

  	t, _ := template.ParseFiles("temp/index.html")
  	t.Execute(res, nil)

}


func main() {

  http.HandleFunc("/welcome",handle)

  http.Handle("/",http.FileServer(http.Dir("temp")))

	http.ListenAndServe(":8080",nil)

}
