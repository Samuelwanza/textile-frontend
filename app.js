document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("predictButton")
    .addEventListener("click", function () {
      let input = document.getElementById("imageInput");
      let file = input.files[0];

      let formData = new FormData();
      formData.append("image", file);

      let xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://flask-production-ddb9.up.railway.app/predict",
        true
      );
      xhr.onload = function () {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          document.getElementById("result").innerHTML =
            "Prediction: " + response.prediction;
        } else {
          console.error("Error:", xhr.statusText);
        }
      };

      xhr.onerror = function () {
        console.error("Request failed");
      };

      xhr.send(formData);
    });
});
