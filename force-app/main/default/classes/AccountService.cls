public with sharing class AccountService {
    @AuraEnabled
    public static Account accountCreator(Account acct){
        try {
            //insert acct;
            return acct;
        } catch (Exception e) {
            return null;
        }
    }
}
