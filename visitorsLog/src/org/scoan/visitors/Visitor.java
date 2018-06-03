package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Visitor {
	
	private Integer id;
	private String firstName;
	private String middleName;
	private String lastName;
	
	private String sex;
	private String dob;
	private Integer maritalStatus;
	
	private Integer country;
	private String address;
	private String phone1;
	private String phone2;
	
	private String email;
	private String website;
	
	private String dateOfArrival;
	private String timeOfArrival;
	private String dateOfDeparture;
	private String timeOfDeparture;
	private String reason;
	
	private Integer occupation;
	private String ministry;
	
	private String hasPassport;
	private String hasMedReport;
	private String takingMeds;
	private String isPartner;
	private String partnerNo;
	
	
	private String visitedBefore;
	private String blacklisted;
	
	private Integer modeOfVisit;
	private Integer referenceNo;
	private String screener;
	private String inCareOf;
	private String groupCoordinator;
	private Integer dining;
	
	private String createdOn;
	private Integer createdBy;
	private String lastModifiedOn;
	private String lastModifiedBy;
	
	private String lastVisit;
	//private Integer numOfVisitors;
	
	private String picLocation;
	private String comment;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Integer getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(Integer maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public Integer getCountry() {
		return country;
	}

	public void setCountry(Integer country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone1() {
		return phone1;
	}

	public void setPhone1(String phone1) {
		this.phone1 = phone1;
	}

	public String getPhone2() {
		return phone2;
	}

	public void setPhone2(String phone2) {
		this.phone2 = phone2;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getDateOfArrival() {
		return dateOfArrival;
	}

	public void setDateOfArrival(String dateOfArrival) {
		this.dateOfArrival = dateOfArrival;
	}

	public String getTimeOfArrival() {
		return timeOfArrival;
	}

	public void setTimeOfArrival(String timeOfArrival) {
		this.timeOfArrival = timeOfArrival;
	}

	public String getDateOfDeparture() {
		return dateOfDeparture;
	}

	public void setDateOfDeparture(String dateOfDeparture) {
		this.dateOfDeparture = dateOfDeparture;
	}

	public String getTimeOfDeparture() {
		return timeOfDeparture;
	}

	public void setTimeOfDeparture(String timeOfDeparture) {
		this.timeOfDeparture = timeOfDeparture;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getHasPassport() {
		return hasPassport;
	}

	public void setHasPassport(String hasPassport) {
		
		if(hasPassport == null)
			this.hasPassport = "N";
		else
			this.hasPassport = hasPassport;
	}

	public String getIsPartner() {
		return isPartner;
	}

	public void setIsPartner(String isPartner) {
		if(isPartner == null)
			this.isPartner = "N";
		else
			this.isPartner = isPartner;
		
	}

	public String getPartnerNo() {
		return partnerNo;
	}

	public void setPartnerNo(String partnerNo) {
		this.partnerNo = partnerNo;
	}

	public String getVisitedBefore() {
		return visitedBefore;
	}

	public void setVisitedBefore(String visitedBefore) {
		if(visitedBefore == null)
			this.visitedBefore = "N";
		else
			this.visitedBefore = visitedBefore;
	}

		
	public String getHasMedReport() {
		return hasMedReport;
	}

	public void setHasMedReport(String hasMedReport) {
		this.hasMedReport = hasMedReport;
	}

	public String getTakingMeds() {
		return takingMeds;
	}

	public void setTakingMeds(String takingMeds) {
		this.takingMeds = takingMeds;
	}

	public Integer getOccupation() {
		return occupation;
	}

	public void setOccupation(Integer occupation) {
		this.occupation = occupation;
	}

	public String getMinistry() {
		return ministry;
	}

	public void setMinistry(String ministry) {
		this.ministry = ministry;
	}

	
	public String getBlacklisted() {
		return blacklisted;
	}

	public void setBlacklisted(String blacklisted) {
		this.blacklisted = blacklisted;
	}

	public Integer getModeOfVisit() {
		return modeOfVisit;
	}

	public void setModeOfVisit(Integer modeOfVisit) {
		this.modeOfVisit = modeOfVisit;
	}

	public Integer getReferenceNo() {
		return referenceNo;
	}

	public void setReferenceNo(Integer referenceNo) {
		this.referenceNo = referenceNo;
	}

	public String getScreener() {
		return screener;
	}

	public void setScreener(String screener) {
		this.screener = screener;
	}

	public String getInCareOf() {
		return inCareOf;
	}

	public void setInCareOf(String inCareOf) {
		this.inCareOf = inCareOf;
	}

	public String getGroupCoordinator() {
		return groupCoordinator;
	}

	public void setGroupCoordinator(String groupCoordinator) {
		this.groupCoordinator = groupCoordinator;
	}

	public Integer getDining() {
		return dining;
	}

	public void setDining(Integer dining) {
		this.dining = dining;
	}

	public String getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}

	public Integer getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	public String getLastModifiedOn() {
		return lastModifiedOn;
	}

	public void setLastModifiedOn(String lastModifiedOn) {
		this.lastModifiedOn = lastModifiedOn;
	}

	public String getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(String lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}

	public String getLastVisit() {
		return lastVisit;
	}

	public void setLastVisit(String lastVisit) {
		this.lastVisit = lastVisit;
	}

	public String getPicLocation() {
		return picLocation;
	}

	public void setPicLocation(String picLocation) {
		this.picLocation = picLocation;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String toString() {
		return "The visitor, id (" + this.id + ") is " + this.firstName + " " + this.middleName + " " + this.lastName + ", born: " + this.dob + ", Sex: " + this.sex + " visited on " + this.dateOfArrival + ", time of arrival: " + this.timeOfArrival + 
				" left on: " + this.dateOfDeparture + " at " + this.timeOfDeparture + ". He is from " + this.country + " and is a " + this.occupation + ". Last visit: " + this.lastVisit + " by profession. From this ministry: " + this.ministry + "Visited before? " + 
				this.visitedBefore + "; is a partner? " + this.isPartner + "; Partner number? " + this.partnerNo + "; has passport? " + this.hasPassport + " Pic Location: " + this.picLocation + ", comment: " + this.comment + ", mode of visit: " + this.modeOfVisit + 
				", partner no: " + this.partnerNo + ", screener: " + this.screener + ", reference no: " + this.referenceNo + ", group coordinator: " + this.groupCoordinator;
	}
	
	static class VisitorMapper implements RowMapper<Visitor>{

		@Override
		public Visitor mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			Visitor visitor = new Visitor();
			
			visitor.setId(rs.getInt("id"));
			visitor.setFirstName(rs.getString("fname"));
			visitor.setMiddleName(rs.getString("mname"));
			visitor.setLastName(rs.getString("lname"));
			visitor.setSex(rs.getString("sex"));
			visitor.setDob(rs.getString("dob"));
			visitor.setMaritalStatus(rs.getInt("marital_status"));
			visitor.setCountry(rs.getInt("country_id"));
			visitor.setAddress(rs.getString("address"));
			visitor.setPhone1(rs.getString("phone1"));
			visitor.setPhone2(rs.getString("phone2"));
			visitor.setEmail(rs.getString("email"));
			visitor.setWebsite(rs.getString("website"));
			visitor.setOccupation(rs.getInt("occupation_id"));
			visitor.setMinistry(rs.getString("ministry"));
			
			visitor.setHasPassport(rs.getString("has_passport"));
			visitor.setIsPartner(rs.getString("is_partner"));
			visitor.setPartnerNo(rs.getString("partnership_no"));
			
			visitor.setBlacklisted(rs.getString("blacklisted"));
						
			visitor.setCreatedBy(rs.getInt("created_by"));
			visitor.setCreatedOn(rs.getString("created_on"));
			visitor.setLastModifiedOn(rs.getString("last_modified"));
			visitor.setLastModifiedBy(rs.getString("last_modified_by"));
			
			visitor.setPicLocation(rs.getString("picture_uri"));
			
			visitor.setComment(rs.getString("comment"));
			
			try {
				visitor.setLastVisit(rs.getString("lastVisit"));
			}catch(Exception ex) {
				
			}
			
			return visitor;
		}
		
	}
	
}
