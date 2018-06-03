package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Message {
	private Integer id;
	private String body;
	private Integer creator;
	private Integer thread;
	private Integer type;
	private String createdOn;
	private String modifiedOn;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	
	public Integer getCreator() {
		return creator;
	}
	public void setCreator(Integer creator) {
		this.creator = creator;
	}
	
	public Integer getThread() {
		return thread;
	}
	
	public void setThread(Integer thread) {
		this.thread = thread;
	}
	
	public Integer getType() {
		return type;
	}
	
	public void setType(Integer type) {
		this.type = type;
	}
	
	public String getCreatedOn() {
		return createdOn;
	}
	
	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}
	
	public String getModifiedOn() {
		return modifiedOn;
	}
	
	public void setModifiedOn(String modifiedOn) {
		this.modifiedOn = modifiedOn;
	}
	
	public String toString() {
		return "Message id: " + this.id + ", Message body: " + this.body + ", created by: " + this.creator + " on " + this.createdOn;
	}
	
	static class MessageMapper implements RowMapper<Message>{

		@Override
		public Message mapRow(ResultSet rs, int numRow) throws SQLException {
			Message message = new Message();
			message.setId(rs.getInt("id"));
			message.setBody(rs.getString("body"));
			message.setThread(rs.getInt("thread"));
			message.setType(rs.getInt("type"));
			message.setCreatedOn(rs.getString("created_on"));
			message.setCreator(rs.getInt("creator_id"));
			message.setModifiedOn(rs.getString("modified_on"));
			return message;
		}
		
	}
	
}