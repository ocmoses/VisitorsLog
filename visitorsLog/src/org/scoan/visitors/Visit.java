package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Visit {
	
	private Integer id;
	private  Integer recordedBy;
	private  String recordedOn;
	private  Integer visitorId;
	private  String arrivalDate;
	private  String arrivalTime;
	private  Integer arrivalFrom;
	private  String reasonOfVisit;
	private  String departureDate;
	private  String departureTime;
	private  Integer departureTo;
	
	private Integer modeOfVisit;
	private Integer referenceNo;
	private String screener;
	private String inCareOf;
	private String groupCoordinator;
	private Integer dining;
	
	private  String hasMedReport;
	private  String onMedOnArrival;
	private  String comment;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getRecordedBy() {
		return recordedBy;
	}
	public void setRecordedBy(Integer recordedBy) {
		this.recordedBy = recordedBy;
	}
	public String getRecordedOn() {
		return recordedOn;
	}
	public void setRecordedOn(String recordedOn) {
		this.recordedOn = recordedOn;
	}
	public Integer getVisitorId() {
		return visitorId;
	}
	public void setVisitorId(Integer visitorId) {
		this.visitorId = visitorId;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public String getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public Integer getArrivalFrom() {
		return arrivalFrom;
	}
	public void setArrivalFrom(Integer arrivalFrom) {
		this.arrivalFrom = arrivalFrom;
	}
	public String getReasonOfVisit() {
		return reasonOfVisit;
	}
	public void setReasonOfVisit(String reasonOfVisit) {
		this.reasonOfVisit = reasonOfVisit;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}
	public Integer getDepartureTo() {
		return departureTo;
	}
	public void setDepartureTo(Integer departureTo) {
		this.departureTo = departureTo;
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
	public String getHasMedReport() {
		return hasMedReport;
	}
	public void setHasMedReport(String hasMedReport) {
		this.hasMedReport = hasMedReport;
	}
	public String getOnMedOnArrival() {
		return onMedOnArrival;
	}
	public void setOnMedOnArrival(String onMedOnArrival) {
		this.onMedOnArrival = onMedOnArrival;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	public String toString() {
		return "Visit details are as follows: id: " + this.id + ", recorded by " + this.recordedBy 
				+ " on " + this.recordedOn + ". Visitor was " + this.visitorId + ", arrived on " 
				+ this.arrivalDate + " at " + this.arrivalTime + ", departed on " + this.departureDate 
				+ " at " + this.departureTime + ". Reason for visit: " + this.reasonOfVisit + ". Had med report? "
				+ this.hasMedReport + "; was on meds on arrival? " + this.onMedOnArrival + "; Arrived from " 
				+ this.arrivalFrom + "; Departed to " + this.departureTo + ". Comment: " + this.comment;
	}
	
	static class VisitMapper implements RowMapper<Visit>{

		@Override
		public Visit mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			Visit visit = new Visit();
			visit.setId(rs.getInt("id"));
			visit.setRecordedBy(rs.getInt("recorded_by"));
			visit.setRecordedOn(rs.getString("recorded_on"));
			visit.setVisitorId(rs.getInt("visitor_id"));
			visit.setArrivalDate(rs.getString("arrival_date"));
			visit.setArrivalTime(rs.getString("arrival_time"));
			visit.setDepartureDate(rs.getString("departure_date"));
			visit.setDepartureTime(rs.getString("departure_time"));
			visit.setArrivalFrom(rs.getInt("arrival_from"));
			visit.setDepartureTo(rs.getInt("departure_to"));
			visit.setModeOfVisit(rs.getInt("mode_of_visit"));
			visit.setReferenceNo(rs.getInt("reference_no"));
			visit.setScreener(rs.getString("screener"));
			visit.setInCareOf(rs.getString("in_care_of"));
			visit.setGroupCoordinator(rs.getString("group_coordinator"));
			visit.setDining(rs.getInt("dining"));
			visit.setHasMedReport(rs.getString("has_med_report"));
			visit.setOnMedOnArrival(rs.getString("on_meds_on_arrival"));
			visit.setReasonOfVisit(rs.getString("reason_of_visit"));
			visit.setComment(rs.getString("comment"));
			
			return visit;
		}
		
	}
	
}
