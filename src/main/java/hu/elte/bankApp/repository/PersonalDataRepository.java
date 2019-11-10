package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.PersonalData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonalDataRepository extends CrudRepository<PersonalData, Integer> {
    Optional<PersonalData> getPersonalDataByName(String name);
    Optional<PersonalData> getPersonalDataByIdCardNumber(String idCardNumber);
}
