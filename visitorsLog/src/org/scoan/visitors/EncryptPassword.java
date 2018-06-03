package org.scoan.visitors;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class EncryptPassword {

//	public static void main(String[] args) {
//		//System.out.println("pass : " + encript("password").length());
//	}
	
	public static String encript(String unencripted) {
		try {					
				MessageDigest digest = MessageDigest.getInstance("SHA-256");
				byte[] digested = digest.digest(unencripted.getBytes(StandardCharsets.UTF_8));
				
				StringBuffer buffer = new StringBuffer();
							
				for(int i = 0; i < digested.length; i++) {
					String hexString = Integer.toHexString(0xFF & digested[i]);
					if(hexString.length() == 1) {
						buffer.append("0");
					}
					buffer.append(hexString);
					
				}
				return buffer.toString();
				
			} catch (NoSuchAlgorithmException e) {
				
				e.printStackTrace();
			}
		
			return "";
	}
}
