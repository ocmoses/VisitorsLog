package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class Activity {
	private Integer id;
	private  String activity;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	
	public String toString() {
		return "Activity id: " + this.id + ", Activity name: " + this.activity;
	}
	
	static class ActivityMapper implements RowMapper<Activity>{

		@Override
		public Activity mapRow(ResultSet rs, int numRow) throws SQLException {
			Activity activity = new Activity();
			activity.setId(rs.getInt("id"));
			activity.setActivity(rs.getString("activity"));
			return activity;
		}
		
	}
	
}