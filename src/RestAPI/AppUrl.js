class AppUrl {

    static BaseUrl = 'http://127.0.0.1:8000/api';

    static HomeTopTitle = this.BaseUrl + '/home/title';
    static HomeVideo = this.BaseUrl + '/home/video';
    static Information = this.BaseUrl + '/information';
    static FooterData = this.BaseUrl + '/footerdata';
    static ContactSend = this.BaseUrl + '/contactsend';
    static ClientReview = this.BaseUrl + '/clientreview';


    // project part
    static ProjectAll = this.BaseUrl + '/projectall';
    static ProjectLatest = this.BaseUrl + '/projecthome';
    static ProjectDetails = this.BaseUrl + '/projectdetails';


    //  Services part
    static Services = this.BaseUrl + '/service';
    static ServicesAll = this.BaseUrl + '/services/all';





}

export default AppUrl;