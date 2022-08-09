package com.example.cgnjava222basicauth;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomAuthenticationEntryPoint extends BasicAuthenticationEntryPoint {

	public CustomAuthenticationEntryPoint() {
		this.setRealmName("myown");
	}

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException {
		response.setHeader("WWW-Authenticate", "myown");
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
	}
}