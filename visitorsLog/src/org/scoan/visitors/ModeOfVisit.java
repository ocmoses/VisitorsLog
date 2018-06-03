package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class ModeOfVisit {
	
	private Integer id;
	private String modeOfVisit;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getModeOfVisit() {
		return modeOfVisit;
	}
	public void setModeOfVisit(String modeOfVisit) {
		this.modeOfVisit = modeOfVisit;
	}
	
	static class ModeOfVisitMapper implements RowMapper<ModeOfVisit>{

		@Override
		public ModeOfVisit mapRow(ResultSet rs, int arg1) throws SQLException {
			ModeOfVisit mov = new ModeOfVisit();
			mov.setId(rs.getInt("id"));
			mov.setModeOfVisit(rs.getString("mode"));
			return mov;
		}
		
	}

}
