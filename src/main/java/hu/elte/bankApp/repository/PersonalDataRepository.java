package hu.elte.bankApp.repository;

import hu.elte.bankApp.model.PersonalData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalDataRepository extends CrudRepository<PersonalData, Integer> {
}
