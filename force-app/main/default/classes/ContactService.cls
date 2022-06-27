public with sharing class ContactService {
    @AuraEnabled
    public static Contact contactCreator(Contact ct){
        try {
            //insert acct;
            return ct;
        } catch (Exception e) {
            return null;
        }
    }
}
