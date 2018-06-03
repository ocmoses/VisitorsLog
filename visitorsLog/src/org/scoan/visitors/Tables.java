package org.scoan.visitors;

public class Tables {
	public static final String ACCOUNT_STATUS = "account_status";
	public static final String ACTIVITIES = "activities";
	public static final String COUNTRIES = "countries";
	public static final String MARITAL = "marital";
	public static final String MESSAGES = "messages";
	public static final String MESSAGE_THREADS = "message_thread";
	public static final String OCCUPATIONS = "occupations";
	public static final String USERS_TB = "users_tb";
	public static final String USER_ACTIVITIES = "user_activities";
	public static final String USER_ROLES = "user_roles";
	public static final String VISITORS = "visitors";
	public static final String VISITS = "visits";
	
	static class AccountStatus{
		public static final String ID = "id";
		public static final String STATUS = "status";
	}
	
	static class Activities{
		public static final String ID = "id";
		public static final String ACTIVITY = "activity";
	}
	
	static class Countries{
		public static final String ID = "id";
		public static final String ISO = "iso";
		public static final String NAME = "name";
		public static final String NICENAME = "nicename";
		public static final String ISO3 = "iso3";
		public static final String NUMCODE = "numcode";
		public static final String PHONECODE = "phonecode";
	}
	
	static class Marital{
		public static final String ID = "id";
		public static final String MARITAL_STATUS = "marital_status";
	}
	
	static class Messages{
		public static final String ID = "id";
		public static final String CREATOR_ID = "creator_id";
		public static final String THREAD_ID = "thread_id";
		public static final String TYPE = "type";
		public static final String BODY = "body";
		public static final String CREATED_ON = "created_on";
		public static final String MODIFIED_ON = "modified_on";
	}
	
	static class MessageThreads{
		public static final String ID = "id";
		public static final String CREATOR_ID = "creator_id";
		public static final String CREATED_ON = "created_on";
		
	}
	
	static class Occupations{
		public static final String ID = "id";
		public static final String OCCUPATION = "occupation";
		
	}
	
	static class UsersTB{
		public static final String ID = "id";
		public static final String FIRSTNAME = "fname";
		public static final String MIDDLENAME = "mname";
		public static final String LASTNAME = "lname";
		public static final String SEX = "sex";
		public static final String MARITAL_STATUS = "marital_status";
		public static final String DOB = "dob";
		public static final String USERNAME = "username";
		public static final String PASSWORD = "password";
		public static final String ROLE = "role";
		public static final String CREATED_ON = "created_on";
		public static final String CREATED_BY = "created_by";
		public static final String LAST_MODIFIED_ON = "last_modified";
		public static final String LAST_MODIFIED_BY = "last_modified_by";
		public static final String ACCOUNT_STATUS = "account_status";
		public static final String VISIBLE = "visible";
		public static final String PICTURE_URI = "picture_uri";
		public static final String COMMENT = "comment";
		public static final String LAST_LOGIN = "last_login";
		public static final String PASSWORD_CHANGED = "password_changed";
		public static final String SECURITY_QUESTION = "security_question";
		public static final String SECURITY_ANSWER = "security_answer";
		
	}
	
	static class UserActivities{
		public static final String ID = "id";
		public static final String USER_ID = "user_id";
		public static final String ACTIVITY_ID = "activity_id";
		public static final String TABLE_NAME = "table_name";
		public static final String TIME = "time";
		public static final String COLUMN_ID = "column_id";
		public static final String COLUMN_NAME = "column_name";
		public static final String CHANGED_FROM = "changed_from";
		public static final String CHANGED_TO = "changed_to";
		
	}
	
	static class UserRoles{
		public static final String ID = "id";
		public static final String ROLE = "role";
				
	}
	
	static class Visitors{
		public static final String ID = "id";
		public static final String FIRSTNAME = "fname";
		public static final String MIDDLENAME = "mname";
		public static final String LASTNAME = "lname";
		public static final String SEX = "sex";
		public static final String MARITAL_STATUS = "marital_status";
		public static final String DOB = "dob";
		public static final String COUNTRY_ID = "country_id";
		public static final String ADDRESS = "address";
		public static final String PHONE1 = "phone1";
		public static final String PHONE2 = "phone2";
		public static final String EMAIL = "email";
		public static final String WEBSITE = "website";
		public static final String OCCUPATION_ID = "occupation_id";
		public static final String MINISTRY = "ministry";
		public static final String HAS_PASSPORT = "has_passport";
		public static final String IS_PARTNER = "is_partner";
		public static final String PARTNERSHIP_NO = "partnership_no";
		public static final String VISIBLE = "visible";
		public static final String PICTURE_URI = "picture_uri";
		public static final String BLACKLISTED = "blacklisted";
		public static final String COMMENT = "comment";
		public static final String CREATED_ON = "created_on";
		public static final String CREATED_BY = "created_by";		
		public static final String LAST_MODIFIED_ON = "last_modified";
		public static final String LAST_MODIFIED_BY = "last_modified_by";
				
	}
	
	static class Visits{
		public static final String ID = "id";
		public static final String RECORDED_BY = "recorded_by";
		public static final String RECORDED_ON = "recorded_on";
		public static final String VISITOR_ID = "visitor_id";
		public static final String ARRIVAL_DATE = "arrival_date";
		public static final String ARRIVAL_TIME = "arrival_time";
		public static final String ARRIVAL_FROM = "arrival_from";
		public static final String REASON_FOR_VISIT = "reason_of_visit";
		public static final String DEPARTURE_DATE = "departure_date";
		public static final String DEPARTURE_TIME = "departure_time";
		public static final String DEPARTURE_FROM = "departure_from";
		public static final String HAS_MED_REPORT= "has_med_report";
		public static final String ON_MEDS_ON_ARRIVAL = "on_meds_on_arrival";
		public static final String COMMENT = "comment";
		
	}
	
	
	
}
