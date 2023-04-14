function printResume() {
  let resumework = document.write(
    document.getElementById("resumeImg").innerHTML
  );
  resumework.print();
}
let handleresume = document.querySelector("#printresume");
handleresume.addEventListener("click", printResume);
