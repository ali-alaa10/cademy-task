function validateForm(e) {
  e.preventDefault();

  let validationSet = new Set();

  let userN = document.getElementById("Uname").value;
  let userP = document.getElementById("Upass").value;
  let userM = document.getElementById("Msg").value;

  if (!userN.startsWith("cademy_") && userN.length < 12) {
    alert(
      `Username must be starts with "cademy_" and Mustn't be less than 12 char`
    );
    validationSet.add(false);
  }

  if (userP.length < 15 || (!userP.includes("_") && !userP.includes("@"))) {
    alert(`Password Mustn't be less than 15 char and contains (_) and (@)`);
    validationSet.add(false);
  }

  if (userM.length < 30) {
    alert(`Message must be at less 30 char`);
    validationSet.add(false);
  }
  if (userM.includes("israel")) {
    alert(`Message must be contain israel : Undefine`);
    validationSet.add(false);
  }
  if (validationSet.size === 0) {
    alert("Sent Successfully!");
  }
}
