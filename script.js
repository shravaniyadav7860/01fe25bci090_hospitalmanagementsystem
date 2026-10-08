

document.getElementById("patientForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let patientName =
            document.getElementById("patientName").value.trim();

        let patientContact =
            document.getElementById("patientContact").value.trim();

        let patientEmail =
            document.getElementById("patientEmail").value.trim();


   

        if (
            patientName === "" ||
            patientContact === "" ||
            patientEmail === ""
        ) {

            document.getElementById("patientMessage").textContent =
                "Please fill all the patient details.";

            return;
        }


       

        if (patientContact.length != 10) {

            document.getElementById("patientMessage").textContent =
                "Contact number must contain 10 digits.";

            return;
        }



        if (isNaN(patientContact)) {

            document.getElementById("patientMessage").textContent =
                "Contact number must contain only numbers.";

            return;
        }


       

        document.getElementById("patientMessage").textContent =
            "Patient registration/login successful.";
    }
);





document.getElementById("appointmentForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let patientName =
            document.getElementById(
                "appointmentPatientName"
            ).value.trim();

        let contact =
            document.getElementById(
                "appointmentContact"
            ).value.trim();

        let email =
            document.getElementById(
                "appointmentEmail"
            ).value.trim();

        let doctor =
            document.getElementById("doctor").value;

        let appointmentDate =
            document.getElementById(
                "appointmentDate"
            ).value;

        let appointmentTime =
            document.getElementById(
                "appointmentTime"
            ).value;


      

        if (
            patientName === "" ||
            contact === "" ||
            email === "" ||
            doctor === "" ||
            appointmentDate === "" ||
            appointmentTime === ""
        ) {

            document.getElementById(
                "appointmentMessage"
            ).textContent =
                "Please fill all the appointment details.";

            return;
        }


      

        if (contact.length != 10) {

            document.getElementById(
                "appointmentMessage"
            ).textContent =
                "Contact number must contain 10 digits.";

            return;
        }


       

        if (isNaN(contact)) {

            document.getElementById(
                "appointmentMessage"
            ).textContent =
                "Contact number must contain only numbers.";

            return;
        }


       

        let today = new Date();

        let selectedDate = new Date(appointmentDate);

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {

            document.getElementById(
                "appointmentMessage"
            ).textContent =
                "Appointment date cannot be a past date.";

            return;
        }


      

        let startTime;
        let endTime;


        if (doctor === "Smita Patil") {

            startTime = "09:00";
            endTime = "14:00";

        } else if (doctor === "Vaibhav Sharma") {

            startTime = "14:00";
            endTime = "15:00";

        } else if (doctor === "Mitali Gupta") {

            startTime = "14:00";
            endTime = "17:00";
        }


       

        if (
            appointmentTime < startTime ||
            appointmentTime >= endTime
        ) {

            document.getElementById(
                "appointmentMessage"
            ).textContent =
                "Doctor is not available at this time. Please select a time between "
                + startTime + " and " + endTime + ".";

            return;
        }


        // Appointment successful

        document.getElementById(
            "appointmentMessage"
        ).innerHTML =

            "Appointment Booked Successfully!<br><br>" +

            "Patient Name: " + patientName + "<br>" +

            "Contact: " + contact + "<br>" +

            "Email ID: " + email + "<br>" +

            "Doctor: " + doctor + "<br>" +

            "Appointment Date: " + appointmentDate + "<br>" +

            "Appointment Time: " + appointmentTime;
    }
);
