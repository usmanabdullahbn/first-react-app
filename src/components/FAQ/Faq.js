import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Faq = () => {
  const faqData = [
    {
      question: "What is Lawtrack.pk and how does it help me?",
      answer:
        "Lawtrack.pk is a 360 marketplace venture which provides a platform to people to connect with the Real Estate Services providers i.e lawyer(s) and seek legal services and advices with ease.",
    },
    {
      question: "Does Lawtrack Charge anything from the Clients?",
      answer:
        "No, Lawtrack does not charge anything from the Clients. Clients can post their legal requirement for free and get Lawyer’s advice and online legal help from the Advocates. Client pays only the Lawyer’s fee.",
    },
    {
      question: "Can I get services as per my time schedule?",
      answer:
        "Absolutely yes! You can post and seek the services as per your time and availability. Lawtrack provides you a workbench to manage your request and work as per your need.",
    },
    {
      question: "Does Lawtrack provide the legal services like a lawyer?",
      answer:
        "No Lawtrack does not provide legal services only the lawyers registered with Lawtrack provide the legal services.",
    },
    {
      question: "Who are the registered lawyers?",
      answer:
        "They are independent lawyers who have been practicing in their respective area of expertise and location.",
    },
    {
      question:
        "Does Lawtrack regulate the work and services offered by a lawyer?",
      answer:
        "Lawtrack does not regulate the quality of work or services provided by lawyers but it does have a mechanism to rate the lawyers based on the clients’ feedback.",
    },
    {
      question:
        "How the privacy of a client is maintained while offering the services?",
      answer:
        "In general, lawyers are bound by their professional ethics to maintain the confidentiality of their clients. In addition, they also sign a Confidentiality and non-disclosure agreement with Lawtrack. Rest assured your privacy is well maintained.",
    },
    {
      question: "Can I complain to Lawtrack about a lawyer’s services?",
      answer:
        "Yes, you can do so and on proper verification and outcome, a lawyer’s rating can be upgraded or downgraded based on the client’s feedback. If the Lawyer or his/her service is found to be, as per the complaint, against the standards of profession then that lawyer will be blacklisted on the site and will not be allowed to login.",
    },
    {
      question: "Is Lawtrack services available all the time, 24x7?",
      answer:
        "Yes, Lawtrack is available 24×7. It is an online platform to get your legal matter resolved. A lawyer’s availability is dependent on individual lawyer.",
    },
    {
      question: "Can a lawyer complain against a client?",
      answer:
        "Yes, a lawyer can also complain against a client. Lawtrack will assist in a reasonable manner to get the issues sorted out.",
    },
    {
      question: "How do I know if the lawyer is genuine?",
      answer:
        "All the registered lawyers provide their educational and certificate of practice, as applicable. We also have a process to verify the credentials of a lawyer.",
    },
    {
      question: "How can I engage a lawyer?",
      answer:
        "The system and platform help you to do that with a minimum effort from your side.",
    },
    {
      question:
        "How do I know that the lawyer I found is good for my legal need?",
      answer:
        "We provide the maximum possible information about a lawyer along with our ratings. All that information like education, experience, area of expertise, fee, rating, etc. will help you choose a good lawyer for you.",
    },
  ];

  const [shownAnswerIndex, setShownAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (shownAnswerIndex === index) {
      setShownAnswerIndex(null);
    } else {
      setShownAnswerIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="header-container">
        <h2 className="header">FAQs</h2>
      </div>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
                style={{color:
                    shownAnswerIndex === index &&
                    "blue"
                   
                }}
              className="question-container"
              onClick={() => toggleAnswer(index)}
            >
               {shownAnswerIndex === index ? (
                <FontAwesomeIcon icon={faMinus} className="icon minus-icon" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
              )}
              <h5
                style={{ marginLeft: "10px" }}
              >{faq.question}</h5>
            </div>
            {shownAnswerIndex === index && (
              <div>
                <p style={{ padding: "15px" }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
