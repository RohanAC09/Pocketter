package com.rohan.user.dto.response;

import java.sql.Timestamp;

import com.rohan.user.entity.User;

import lombok.Getter;

@Getter
public class ProfileDetailsDTO implements ResponseDTO {
	private Long userId;
	private String email;
    private String username;
    private String fullName;
    private String bio;
    private Timestamp createdAt;
    private int followerCount;
    private int followingCount;
    private boolean isFollowing;
    
    public ProfileDetailsDTO(User user){
    	this.userId=user.getUserId();
    	this.email=user.getEmail();
    	this.username=user.getUsername();
    	this.fullName=user.getFullName();
    	this.bio=user.getBio();
    	this.createdAt=user.getCreatedAt();
    }
    
    public void setFollowerCount(int followerCount) {
    	this.followerCount=followerCount;
    }

	public void setFollowingCount(int followingCount) {
		this.followingCount = followingCount;
	}

	public void setFollowing(boolean isFollowing) {
		this.isFollowing = isFollowing;
	}
}
