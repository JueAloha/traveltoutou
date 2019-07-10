package com.simplon.back.entities;

import javax.persistence.*;

@Embeddable // Intégrable
public class UserAccount {

    @Column(length = 100, nullable = false)
    private String mail;
    @Column(length = 100, nullable = false)
    private String password;
    @Convert(converter = BooleanConverter.class)
    @Column(nullable = false, length = 1)
    private boolean accountNonExpired = true;
    @Convert(converter = BooleanConverter.class)
    @Column(nullable = false, length = 1)
    private boolean accountNonLocked = true;
    @Convert(converter = BooleanConverter.class)
    @Column(nullable = false, length = 1)
    private boolean credentialsNonExpired = true;
    @Convert(converter = BooleanConverter.class)
    @Column(nullable = false, length = 1)
    private boolean enabled = true;
    @Column(nullable = false, length = 100)
    @Enumerated(EnumType.STRING)// Forcage du type en string pour éviter que Spring se base sur l'ordinal
    private Role role = Role.ROLE_USER;

    public UserAccount() {
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
