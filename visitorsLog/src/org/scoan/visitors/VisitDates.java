package org.scoan.visitors;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class VisitDates {
	
	private String arrivalDate;
	private String departureDate;
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	
	static class VisitDatesMapper implements RowMapper<VisitDates>{

		@Override
		public VisitDates mapRow(ResultSet rs, int arg1) throws SQLException {
			// TODO Auto-generated method stub
			VisitDates vd = new VisitDates();
			vd.setArrivalDate(rs.getString("arrival_date"));
			vd.setDepartureDate(rs.getString("departure_date"));
			return vd;
		}
		
	}

}
