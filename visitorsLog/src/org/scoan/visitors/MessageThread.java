package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class MessageThread {
	
	private Integer id;
	private Integer creatorId;
	private String createdOn;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(Integer creatorId) {
		this.creatorId = creatorId;
	}
	public String getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}
	
	public String toString() {
		return "Thread was created on " + this.createdOn + " by " + this.creatorId;
	}
	
	static class MessageThreadMapper implements RowMapper<MessageThread>{

		@Override
		public MessageThread mapRow(ResultSet rs, int rowNum) throws SQLException {
			MessageThread mt = new MessageThread();
			mt.setId(rs.getInt("id"));
			mt.setCreatorId(rs.getInt("creator_id"));
			mt.setCreatedOn(rs.getString("created_on"));
			return mt;
		}
		
	}

}
