import React from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardText, CardGroup, CardImage} from "mdbreact";
import OpenModal from './open.news.modal.js';

var title1="Πίνακας κατάταξης υποψηφίων";
var title2="Υποτροφίες από τη Γαλλία για Έλληνες νέους ερευνητές";
var title3="Χορήγηση τριών υποτροφιών σε Έλληνες φοιτητές για σπουδές στο Beijing Institute of Technology";
var title4="Υποτροφίες της Αυστρίας";

var pic1="assets/1.png";
var pic2="assets/4.jpg";
var pic3="assets/3.jpg";


var quicktext1="Πίνακας κατάταξης υποψηφίων υποτρόφων κατά φθίνουσα σειρά του βαθμού πτυχίου για το κληροδότημα «Π. ΤΡΙΑΝΤΑΦΥΛΛΙΔΗΣ» για σπουδές Β΄και Γ΄κύκλου στο εσωτερικό ακαδ. έτους 2016-17";
var quicktext2="Ενημέρωση για την επικείμενη προκήρυξη προγράμματος χορήγησης υποτροφιών στο πλαίσιο της Πράξης «Ενίσχυση Μεταδιδακτόρων ερευνητών/ερευνητριών» – Β΄ Κύκλος";
var quicktext3="ΙΚΥ 100 μεταπτυχιακές υποτροφίες ΙΚΥ-ΕΤΕ για το ακαδ. έτος 2018-19";
var quicktext4="Ο κατωτέρω πίνακας αναρτάται για ενημέρωσή σας. Για έκαστο υποψήφιο του πίνακα κατάταξης εκ των επιτυχόντων σε θέση υποτροφίας διενεργείται έλεγχος των υποβληθέντων δικαιολογητικών";

var text1_1="Ο κατωτέρω πίνακας αναρτάται για ενημέρωσή σας. Για έκαστο υποψήφιο του πίνακα κατάταξης εκ των επιτυχόντων σε θέση υποτροφίας διενεργείται έλεγχος των υποβληθέντων δικαιολογητικών προκειμένου να διαπιστωθεί ότι συντρέχουν οι προϋποθέσεις για τη χορήγηση της υποτροφίας, ως ορίζονται στη συστατική πράξη του κληροδοτήματος και αναφέρονται στο κεφάλαιο Α της ανωτέρω Προκήρυξης. Μεταξύ περισσοτέρων υποψηφίων, που ισοβαθμούν σε θέση υποτροφίας ως προς το βαθμό πτυχίου, υπότροφος διορίζεται ο υποψήφιος για τον οποίο διαπιστώνεται η συνδρομή των προϋποθέσεων για τη χορήγηση της υποτροφίας και ύστερα από σχετικό έλεγχο του εκκαθαριστικού σημειώματος του φορολογικού έτους 2016 διαπιστωθεί ότι έχει το χαμηλότερο ατομικό ή οικογενειακό εισόδημα επιβολής εισφοράς σε σχέση με τον υποψήφιο με τον οποίο διαπιστώθηκε ισοβαθμία ως προς το βαθμό πτυχίου.";
var text1_2="Σε περίπτωση που στο πρόσωπο ενός εκ των υποψηφίων επιτυχόντων σε θέση υποτροφίας διαπιστωθεί είτε ότι δεν συντρέχουν οι προϋποθέσεις για το διορισμό του ως υποτρόφου είτε ο υποψήφιος δεν υποβάλλει τα απαιτούμενα δικαιολογητικά, ελέγχεται η συνδρομή αυτών για τον υποψήφιο που έχει καταλάβει την επόμενη θέση με βάση το βαθμό πτυχίου του Πρώτου Κύκλου Σπουδών και, εφόσον διαπιστωθεί ότι οι προϋποθέσεις της συστατικής πράξης του ως άνω κληροδοτήματος συντρέχουν για αυτόν, διορίζεται υπότροφος.";
var text2_1="Διά του παρόντος σας γνωστοποιούμε ότι η Γαλλική Πρεσβεία στην Ελλάδα/ Γαλλικό Ινστιτούτο Ελλάδος παρέχει υποτροφίες κινητικότητας σε νέους Έλληνες μεταδιδακτορικούς ερευνητές. Οι υποτροφίες δίνουν τη δυνατότητα σε νέους ερευνητές να διεξάγουν ερευνητικό έργο σε ένα γαλλικό εργαστήριο σε διάφορα ερευνητικά πεδία. ";
var text2_2="Ημερομηνίες υποβολής των υποψηφιοτήτων είναι από 14 Ιανουαρίου 2019 μέχρι 30 Απριλίου 2019. Ο κανονισμός του προγράμματος, η προκήρυξη και η ηλεκτρονική φόρμα υποψηφιότητας έχουν αναρτηθεί στην ιστοσελίδα του Γαλλικού Ινστιτούτου Ελλάδος: http://www.ifa.gr/el/etudes-en-frgen/bourses-de-mobilite-el/bourses-chercheurs-el";
var text3_1="Για έκαστο υποψήφιο του πίνακα κατάταξης εκ των επιτυχόντων σε θέση υποτροφίας διενεργείται έλεγχος των υποβληθέντων δικαιολογητικών προκειμένου να διαπιστωθεί ότι συντρέχουν οι προϋποθέσεις για τη χορήγηση της υποτροφίας, ως ορίζονται στη συστατική πράξη του κληροδοτήματος και αναφέρονται στο κεφάλαιο Α της ανωτέρω Προκήρυξης. Μεταξύ περισσοτέρων υποψηφίων, που ισοβαθμούν σε θέση υποτροφίας ως προς το βαθμό πτυχίου, υπότροφος διορίζεται ο υποψήφιος για τον οποίο διαπιστώνεται η συνδρομή των προϋποθέσεων.";
var text3_2="Σε περίπτωση που στο πρόσωπο ενός εκ των υποψηφίων επιτυχόντων σε θέση υποτροφίας διαπιστωθεί είτε ότι δεν συντρέχουν οι προϋποθέσεις για το διορισμό του ως υποτρόφου";
var text4_1="Ο κανονισμός του προγράμματος, η προκήρυξη και η ηλεκτρονική φόρμα υποψηφιότητας έχουν αναρτηθεί στην ιστοσελίδα του Γαλλικού Ινστιτούτου Ελλάδος: http://www.ifa.gr/el/etudes-en-frgen/bourses-de-mobilite-el/bourses-chercheurs-el";
var text4_2="Ο κατωτέρω πίνακας αναρτάται για ενημέρωσή σας. Για έκαστο υποψήφιο του πίνακα κατάταξης εκ των επιτυχόντων σε θέση υποτροφίας διενεργείται έλεγχος των υποβληθέντων δικαιολογητικών προκειμένου να διαπιστωθεί ότι συντρέχουν οι προϋποθέσεις για τη χορήγηση της υποτροφίας, ως ορίζονται στη συστατική πράξη του κληροδοτήματος και αναφέρονται στο κεφάλαιο Α της ανωτέρω Προκήρυξης. Μεταξύ περισσοτέρων υποψηφίων, που ισοβαθμούν σε θέση υποτροφίας ως προς το βαθμό πτυχίου, υπότροφος διορίζεται ο υποψήφιος για τον οποίο διαπιστώνεται η συνδρομή των προϋποθέσεων για τη χορήγηση της υποτροφίας και ύστερα από σχετικό έλεγχο του εκκαθαριστικού σημειώματος του φορολογικού έτους 2016 διαπιστωθεί ότι έχει το χαμηλότερο ατομικό ή οικογενειακό εισόδημα επιβολής εισφοράς σε σχέση με τον υποψήφιο με τον οποίο διαπιστώθηκε ισοβαθμία ως προς το βαθμό πτυχίου.";



export default class LatestNews extends React.Component{


  render() {
    return (
      <Card  style = { {   height:'100%' , marginTop: '1rem'} } >
        <CardHeader color = " light-blue" tag = "h3" >Όλα τα Νέα< /CardHeader>
        <CardBody >
       <CardGroup deck>

        <Card>
          <CardImage src={pic1} alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{title1}</CardTitle>
            <CardText>{quicktext1}</CardText>
            <OpenModal title={title1} text_a={text1_1} text_b={text1_2} src={pic1}/>
          </CardBody>
        </Card>

        <Card>
          <CardImage src={pic2} alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{title2}</CardTitle>
            <CardText>{quicktext2}</CardText>
            <OpenModal title={title2} text_a={text2_1} text_b={text2_2} src={pic2}/>
          </CardBody>
        </Card>

        <Card>
          <CardImage src={pic1} alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{title3}</CardTitle>
            <CardText>{quicktext3}</CardText>
            <OpenModal title={title3} text_a={text3_1} text_b={text3_2} src={pic1}/>
          </CardBody>
        </Card>

        <Card>
          <CardImage src={pic3} alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">{title4}</CardTitle>
            <CardText>{quicktext4}</CardText>
            <OpenModal title={title4} text_a={text4_1} text_b={text4_2} src={pic3}/>
          </CardBody>
        </Card>

      </CardGroup>
      <br/>

      <CardGroup deck>

       <Card>
         <CardImage src={pic2} alt="Card image cap" top hover overlay="white-slight"/>
         <CardBody>
           <CardTitle tag="h5">{title2}</CardTitle>
           <CardText>{quicktext2}</CardText>
           <OpenModal title={title2} text_a={text2_1} text_b={text2_2} src={pic2}/>
         </CardBody>
       </Card>

       <Card>
         <CardImage src={pic1} alt="Card image cap" top hover overlay="white-slight"/>
         <CardBody>
           <CardTitle tag="h5">{title1}</CardTitle>
           <CardText>{quicktext1}</CardText>
           <OpenModal title={title1} text_a={text1_1} text_b={text1_2} src={pic1}/>
         </CardBody>
       </Card>

       <Card>
         <CardImage src={pic3} alt="Card image cap" top hover overlay="white-slight"/>
         <CardBody>
           <CardTitle tag="h5">{title4}</CardTitle>
           <CardText>{quicktext4}</CardText>
           <OpenModal title={title4} text_a={text4_1} text_b={text4_2} src={pic3}/>
         </CardBody>
       </Card>

       <Card>
         <CardImage src={pic2} alt="Card image cap" top hover overlay="white-slight"/>
         <CardBody>
           <CardTitle tag="h5">{title2}</CardTitle>
           <CardText>{quicktext2}</CardText>
           <OpenModal title={title2} text_a={text2_1} text_b={text2_2} src={pic2}/>
         </CardBody>
       </Card>

     </CardGroup>
      </CardBody >
      </Card >
    );
  }
}
