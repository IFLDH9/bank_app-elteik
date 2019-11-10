package hu.elte.bankApp.security;

import hu.elte.bankApp.model.PersonalData;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
@NoArgsConstructor
public class AuthenticatedUser {
    private PersonalData user;

    public PersonalData getUser() {
        return user;
    }

    public void setUser(PersonalData user) {
        this.user = user;
    }
}


