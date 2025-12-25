"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitPrequalification(formData) {
  // 1. HONEYPOT CHECK
  if (formData.get("website_url")) {
    return { success: true, message: "Form submitted successfully!" };
  }

  try {
    // 2. Extract Files & Prepare Attachments
    const attachments = [];

    // Helper to process a single file
    const processFile = async (fileEntry) => {
      if (fileEntry && fileEntry.size > 0 && fileEntry.name !== "undefined") {
        const arrayBuffer = await fileEntry.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        attachments.push({ filename: fileEntry.name, content: buffer });
      }
    };

    // A. Handle Multiple Insurance Certificates
    const insuranceFiles = formData.getAll("insuranceCertificates");
    for (const file of insuranceFiles) {
      await processFile(file);
    }

    // B. Handle Safety Program
    await processFile(formData.get("safetyProgramFile"));

    // C. Handle Signature File
    await processFile(formData.get("signatureFile"));

    // 3. Construct HTML Email Body
    // We categorize the data for readability in the email
    const getVal = (name) => formData.get(name) || "-";

    const emailHtml = `
      <h1>Contractor Prequalification Application</h1>
      
      <h2>1. Company Information</h2>
      <p><strong>Company Name:</strong> ${getVal("companyName")}</p>
      <p><strong>DBA:</strong> ${getVal("dba")}</p>
      <p><strong>Address:</strong> ${getVal("address")}</p>
      <p><strong>Contact/Title:</strong> ${getVal("contactPersonTitle")}</p>
      <p><strong>Phone:</strong> ${getVal("phone")}</p>
      <p><strong>Email:</strong> ${getVal("email")}</p>
      <p><strong>Work Type:</strong> ${getVal("workType")}</p>
      <p><strong>Years in Business:</strong> ${getVal("yearsBusiness")}</p>
      <p><strong>Areas Served:</strong> ${getVal("areasServed")}</p>

      <h2>2. Licensing</h2>
      <p><strong>License Numbers:</strong> ${getVal("licenseNumbers")}</p>
      <p><strong>Expiration:</strong> ${getVal("licenseExpiration")}</p>
      <p><strong>Trade Certs:</strong> ${getVal("tradeCertifications")}</p>
      <p><strong>OSHA Certs:</strong> ${getVal("oshaCertifications")}</p>

      <h2>3. Insurance</h2>
      <p><strong>Carrier:</strong> ${getVal("insuranceCarrier")}</p>
      <p><strong>Agent Contact:</strong> ${getVal("agentContact")}</p>

      <h2>4. Bonding & Financial</h2>
      <p><strong>Bondable:</strong> ${getVal("bondable")}</p>
      <p><strong>Bonding Company:</strong> ${getVal("bondingCompany")}</p>
      <p><strong>Single Limit:</strong> ${getVal("singleProjectLimit")}</p>
      <p><strong>Aggregate Limit:</strong> ${getVal("aggregateLimit")}</p>
      <p><strong>Annual Revenue:</strong> ${getVal("annualRevenue")}</p>
      <p><strong>Avg Project Size:</strong> ${getVal("avgProjectSize")}</p>

      <h2>5. Safety</h2>
      <p><strong>EMR:</strong> ${getVal("emr")}</p>
      <p><strong>OSHA Incidents:</strong> ${getVal("oshaIncidents")}</p>
      <p><strong>Has Written Program:</strong> ${getVal("hasSafetyProgram")}</p>

      <h2>6. References</h2>
      <hr/>
      <h3>Reference 1</h3>
      <p>${getVal("ref1ProjectName")} | ${getVal("ref1OwnerGc")} | ${getVal(
      "ref1Contact"
    )} | ${getVal("ref1PhoneEmail")}</p>
      <h3>Reference 2</h3>
      <p>${getVal("ref2ProjectName")} | ${getVal("ref2OwnerGc")} | ${getVal(
      "ref2Contact"
    )} | ${getVal("ref2PhoneEmail")}</p>
      <h3>Reference 3</h3>
      <p>${getVal("ref3ProjectName")} | ${getVal("ref3OwnerGc")} | ${getVal(
      "ref3Contact"
    )} | ${getVal("ref3PhoneEmail")}</p>

      <h2>7. Key Personnel</h2>
      <hr/>
      <p><strong>1:</strong> ${getVal("kp1Name")} - ${getVal(
      "kp1Title"
    )} (${getVal("kp1Years")} yrs)</p>
      <p><strong>2:</strong> ${getVal("kp2Name")} - ${getVal(
      "kp2Title"
    )} (${getVal("kp2Years")} yrs)</p>
      <p><strong>3:</strong> ${getVal("kp3Name")} - ${getVal(
      "kp3Title"
    )} (${getVal("kp3Years")} yrs)</p>

      <h2>8. Certification</h2>
      <p><strong>Name:</strong> ${getVal("signatureName")}</p>
      <p><strong>Title:</strong> ${getVal("signatureTitle")}</p>
      <p><strong>Date:</strong> ${getVal("signatureDate")}</p>
    `;

    // 4. Send Email
    const data = await resend.emails.send({
      from: "Prequalification <onboarding@resend.dev>",
      to: "mujtabakhalid20@gmail.com",
      reply_to: getVal("email"),
      subject: `New Contractor Application: ${getVal("companyName")}`,
      html: emailHtml,
      attachments: attachments,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return {
        success: false,
        message: "Failed to submit application. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Application submitted successfully! We will review and contact you shortly.",
    };
  } catch (error) {
    console.error("Server Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
