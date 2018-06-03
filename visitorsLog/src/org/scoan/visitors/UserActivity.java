package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class UserActivity {
	private Long id;
	private Long userId;
	private Long activityId;
	
	private String tableName;
	private String columnName;
	private Long columnId;
	private String changedFrom;
	private String changedTo;
	private String time;
		
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Long getActivityId() {
		return activityId;
	}
	public void setActivityId(Long activityId) {
		this.activityId = activityId;
	}
	public String getTableName() {
		return tableName;
	}
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public Long getColumnId() {
		return columnId;
	}
	public void setColumnId(Long columnId) {
		this.columnId = columnId;
	}
	public String getChangedFrom() {
		return changedFrom;
	}
	public void setChangedFrom(String changedFrom) {
		this.changedFrom = changedFrom;
	}
	public String getChangedTo() {
		return changedTo;
	}
	public void setChangedTo(String changedTo) {
		this.changedTo = changedTo;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	public String toString() {
		return "Activity details; id: " + this.getId() + ", performed by " + this.userId + " on " + this.time  + ". Changed " + 
					this.columnName + " of " + this.tableName + " from " + this.changedFrom + " to " + this.changedTo;
	}
	
	static class UserActivityMapper implements RowMapper<UserActivity>{

		@Override
		public UserActivity mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			UserActivity ua = new UserActivity();
			
			ua.setId(rs.getLong("id"));
			ua.setUserId(rs.getLong("user_id"));
			ua.setActivityId(rs.getLong("activity_id"));
			ua.setTableName(rs.getString("table_name"));
			ua.setColumnName(rs.getString("column_name"));
			ua.setColumnId(rs.getLong("column_id"));
			ua.setChangedFrom(rs.getString("changed_from"));
			ua.setChangedTo(rs.getString("changed_to"));
			ua.setTime(rs.getString("time"));
			
			return ua;
		}
		
	}
}
