package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class VisitorsReferences {
	
	private Integer id;
	private Integer referenceNo;
	private String referenceName;
	private Integer active;
	private String lastModified;
	private String comment;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getReferenceNo() {
		return referenceNo;
	}
	public void setReferenceNo(Integer referenceNo) {
		this.referenceNo = referenceNo;
	}
	public String getReferenceName() {
		return referenceName;
	}
	public void setReferenceName(String referenceName) {
		this.referenceName = referenceName;
	}
	public Integer getActive() {
		return active;
	}
	public void setActive(Integer active) {
		this.active = active;
	}
	public String getLastModified() {
		return lastModified;
	}
	public void setLastModified(String lastModified) {
		this.lastModified = lastModified;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	static class VisitorReferencesMapper implements RowMapper<VisitorsReferences>{

		@Override
		public VisitorsReferences mapRow(ResultSet rs, int arg1) throws SQLException {
			VisitorsReferences vr = new VisitorsReferences();
			vr.setId(rs.getInt("id"));
			vr.setReferenceNo(rs.getInt("reference_no"));
			vr.setReferenceName(rs.getString("reference_name"));
			vr.setActive(rs.getInt("active"));
			vr.setLastModified(rs.getString("last_modified"));
			vr.setComment(rs.getString("comment"));
			
			return vr;
		}
		
	}

}
