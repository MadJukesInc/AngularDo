package org.madjukesinc.ibrik.repository;

import org.madjukesinc.ibrik.domain.Task;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Task entity.
 */
public interface TaskRepository extends JpaRepository<Task,Long> {

    @Query("select task from Task task where task.owner.login = ?#{principal.username}")
    List<Task> findAllForCurrentUser();

    @Query("select task from Task task left join fetch task.members where task.id =:id")
    Task findOneWithEagerRelationships(@Param("id") Long id);

}
